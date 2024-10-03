export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

function getDelay() {
  // Min 1000, max 4000
  const delay = 1000 + ((Math.random() * 100000) % 3000);

  return delay;
}

/**
 * Function that creates a Todo in a Db.
 * Fails for Todos with odd title length.
 */
export function createTodo(todo: Omit<Todo, 'id'>): Promise<{ todo: Todo }> {
  return new Promise((resolve, reject) => {
    const delay = getDelay();

    // Succeed only for TODOs of even length title
    const succeed = todo.title.length % 2 === 0;

    setTimeout(() => {
      if (succeed) {
        resolve({
          todo: {
            ...todo,
            id: Date.now().toString(),
          },
        });
      } else {
        reject(
          // @ts-expect-error Error takes options as a second arg
          new Error('Failed to create TODO', {
            cause: todo,
          })
        );
      }
    }, delay);
  });
}

/**
 * Function that updates a Todo in a DB.
 * Fails for Todos with title length of 6 (eg. "Test 1").
 */
export function updateTodo(todo: Todo): Promise<{ todo: Todo }> {
  return new Promise((resolve, reject) => {
    const delay = getDelay();

    // Fail for Todos with title length of 6
    const succeed = todo.title.length !== 6;

    setTimeout(() => {
      if (succeed) {
        resolve({
          todo,
        });
      } else {
        reject(
          // @ts-expect-error Error takes options as a second arg
          new Error('Failed to update TODO', {
            cause: todo,
          })
        );
      }
    }, delay);
  });
}

/**
 * Function that deletes a Todo in a DB.
 * Fails for Todos with title length of 6 (eg. "Test 1").
 */
export function deleteTodo(
  todo: Pick<Todo, 'id' | 'title'>
): Promise<{ success: true }> {
  return new Promise((resolve, reject) => {
    const delay = getDelay();

    // Fail for Todos with title length of 6
    const succeed = todo.title.length !== 6;

    setTimeout(() => {
      if (succeed) {
        resolve({
          success: true,
        });
      } else {
        reject(
          // @ts-expect-error Error takes options as a second arg
          new Error('Failed to delete TODO', {
            cause: todo,
          })
        );
      }
    }, delay);
  });
}
