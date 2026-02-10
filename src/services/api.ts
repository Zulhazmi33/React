export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const fetchTodos = async (): Promise<Todo[]> => {
  // Fake API call
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
  return response.json();
};
