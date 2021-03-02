/**
 * Min Stack (LeetCode 155)
 *
 * Disign a stack supporting push, pop, top, and retrieving the minimum element in a constant time.
 *
 * push(x) -- Push element x into stack
 * pop() -- Removes the element on the top of stack
 * top() -- Get the top element
 * getMinValue() -- Retrieve the minimum element in the stack
 *
 */

// Consider "Broken Solution" for getMinValue()
/**
 * Use a member variable to keep track of the minimum value
 * It works if there is no pop() operation
 * We have to use additional memory!
 *
 * So we can end up with a solution like below
 */

// First solution

class MinStack_v1 {}
