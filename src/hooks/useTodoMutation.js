import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, postTodo, toggleTodo } from "../api/TodoClient";

export const useCreateTodoMutaion = () => {
  const queryClinet = useQueryClient();

  return useMutation({
    mutationFn: (todo) => postTodo(todo),
    onSuccess: () => {
      queryClinet.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};

export const useDeleteTodoMutation = () => {
  const queryClinet = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteTodo(id),
    onSuccess: () => {
      queryClinet.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};

export const useToggleTodoMutation = () => {
  const queryClinet = useQueryClient();

  return useMutation({
    mutationFn: ({ id, completed }) => toggleTodo(id, completed),
    onSuccess: () => {
      queryClinet.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
