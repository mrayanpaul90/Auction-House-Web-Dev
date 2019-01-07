// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html



module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function postitemUpdate (hook) {
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    const product = hook.parms.postitems;
    const price = hook.data.postitems;
    product_id : product._id;
    current_price : price.current_price;

    return Promise.resolve(hook);
  };
};
