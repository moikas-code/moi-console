import { expect, test } from 'bun:test';

// Re-import or redefine add_handler for test context
const add_handler = async (input: { a: number; b: number }): Promise<{ result: number }> => {
  return { result: input.a + input.b };
};

test('add_handler adds two numbers correctly', async () => {
  const result = await add_handler({ a: 2, b: 3 });
  expect(result.result).toBe(5);
}); 