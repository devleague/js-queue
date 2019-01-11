/**
 * Queue
 * -----------------------------
 * A Queue data structure
 *
 * A queue is a data structure in which the first element is inserted from one end called
 * REAR (also called tail), and the deletion of existing element takes place from the other
 * end called as FRONT (also called head).  This makes queue a FIFO (first in first out), or
 * the element that is inserted first will always be the first to be removed.
 * You will be using an Object as an internal datastore.  Do not use an Array!
 *
 * There should be a constructor method with no arguments.
 *
 * Note that the _storage Object is OPTIONAL as there is a way to implement this exercise
 * without the _storage Object.
 *
 * @private {object} _storage              Default value should be an empty object.
 * @private {number} _start                Default value should be set to 0.
 * @private {number} _end                Default value should be set to 0.
 *
 */
const _storage = {};
let _start = 0;
let _end = 0;

/**
 * Method => size()
 * -----------------------------
 * Returns the size of the queue.
 *
 * @name size
 * @return {Number}
 */
const size = () => {
  // Your code here.
};

/**
 * Method => enqueue(item)
 * -----------------------------
 * Puts an item in the queue.
 *
 * @name enqueue
 * @param item
 * @return {Number} returns the new size
 */
const enqueue = item => {
  // Your code here.
};

/**
 * Method => dequeue()
 * -----------------------------
 * Takes an item off the queue and returns it.
 *
 * @name dequeue
 * @return {Object}   Note that everything in javascript is an Object.
 */
const dequeue = () => {
  // Your code here.
};

/**
 * Method => peek()
 * -----------------------------
 * Returns the value of the first element without dequeueing.
 *
 * @name peek
 * @return {Object}   Note that everything in javascript is an Object.
 */
const peek = () => {
  // Your code here.
};

module.exports = { size, enqueue, dequeue, peek };
