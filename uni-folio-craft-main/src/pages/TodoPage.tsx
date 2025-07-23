import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2, Calendar, CheckSquare, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  category: string;
  createdAt: Date;
}

const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [category, setCategory] = useState("General");
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('portfolio-todos');
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos).map((todo: any) => ({
        ...todo,
        createdAt: new Date(todo.createdAt)
      }));
      setTodos(parsedTodos);
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('portfolio-todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      const todo: Todo = {
        id: Date.now().toString(),
        text: newTodo.trim(),
        completed: false,
        priority,
        category,
        createdAt: new Date()
      };
      setTodos([todo, ...todos]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const categories = ['General', 'Work', 'Study', 'Personal', 'Shopping'];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-gradient">Smart To-Do List</h1>
              <p className="text-muted-foreground">Stay organized and productive</p>
            </div>
          </div>

          {/* Add Todo Form */}
          <Card className="card-hover p-6 mb-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <Input
                  placeholder="What needs to be done?"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                  className="flex-1 bg-muted/50"
                />
                <Button onClick={addTodo} variant="hero">
                  <Plus className="h-4 w-4 mr-2" />
                  Add
                </Button>
              </div>
              
              <div className="flex gap-4">
                <Select value={priority} onValueChange={(value: 'low' | 'medium' | 'high') => setPriority(value)}>
                  <SelectTrigger className="w-32 bg-muted/50">
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="w-40 bg-muted/50">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          {/* Filter Buttons */}
          <div className="flex gap-2 mb-6">
            <Button
              variant={filter === 'all' ? 'default' : 'ghost'}
              onClick={() => setFilter('all')}
              size="sm"
            >
              All ({todos.length})
            </Button>
            <Button
              variant={filter === 'active' ? 'default' : 'ghost'}
              onClick={() => setFilter('active')}
              size="sm"
            >
              Active ({todos.filter(t => !t.completed).length})
            </Button>
            <Button
              variant={filter === 'completed' ? 'default' : 'ghost'}
              onClick={() => setFilter('completed')}
              size="sm"
            >
              Completed ({todos.filter(t => t.completed).length})
            </Button>
          </div>

          {/* Todo List */}
          <div className="space-y-4">
            {filteredTodos.length === 0 ? (
              <Card className="card-hover p-12 text-center">
                <CheckSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No tasks found</h3>
                <p className="text-muted-foreground">
                  {filter === 'all' ? 'Add your first task to get started!' :
                   filter === 'active' ? 'All tasks completed! Great job!' :
                   'No completed tasks yet.'}
                </p>
              </Card>
            ) : (
              filteredTodos.map((todo) => (
                <Card key={todo.id} className="card-hover p-4">
                  <div className="flex items-center space-x-4">
                    <Checkbox
                      checked={todo.completed}
                      onCheckedChange={() => toggleTodo(todo.id)}
                    />
                    
                    <div className="flex-1 min-w-0">
                      <p className={`font-medium ${todo.completed ? 'line-through text-muted-foreground' : ''}`}>
                        {todo.text}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className={getPriorityColor(todo.priority)}>
                          {todo.priority}
                        </Badge>
                        <Badge variant="outline" className="bg-muted/50">
                          {todo.category}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {todo.createdAt.toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteTodo(todo.id)}
                      className="hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))
            )}
          </div>

          {/* Stats */}
          {todos.length > 0 && (
            <Card className="card-hover p-6 mt-8">
              <h3 className="text-lg font-semibold mb-4">Productivity Stats</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{todos.length}</div>
                  <div className="text-sm text-muted-foreground">Total Tasks</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{todos.filter(t => t.completed).length}</div>
                  <div className="text-sm text-muted-foreground">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{todos.filter(t => !t.completed).length}</div>
                  <div className="text-sm text-muted-foreground">Remaining</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {todos.length > 0 ? Math.round((todos.filter(t => t.completed).length / todos.length) * 100) : 0}%
                  </div>
                  <div className="text-sm text-muted-foreground">Complete</div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;