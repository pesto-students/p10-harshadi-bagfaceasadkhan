class MyPromise {
  constructor(executor) {
    this.status = "PENDING";
    this.result = null;
    this.callbacks = [];

    const updateStates = (value, status) => {
      if (this.status === "PENDING") {
        this.status = status;
        this.result = value;
        this.callbacks.forEach((callback) => callback());
      }
    };

    const resolve = (value) => {
      updateStates(value, "RESOLVED");
      // if (this.status === "PENDING") {
      //   this.status = "RESOLVED";
      //   this.result = value;
      //   this.callbacks.forEach((callback) => callback());
      // }
    };

    const reject = (value) => {
      updateStates(value, "REJECTED");
      // if (this.status === "PENDING") {
      //   this.status = "REJECTED";
      //   this.result = value;
      //   this.callbacks.forEach((callback) => callback());
      // }
    };

    executor(resolve, reject);
  }

  then(onFulfilled) {
    return new MyPromise((resolve) => {
      const handleCallbacks = () => {
        if (this.status === "RESOLVED") {
          const result = onFulfilled(this.result);
          if (result instanceof MyPromise) {
            result.then(resolve);
          } else {
            resolve(result);
          }
        } else if (this.status === "PENDING") {
          this.callbacks.push(handleCallbacks);
        }
      };

      handleCallbacks();
    });
  }

  catch(onRejected) {
    return new MyPromise((resolve) => {
      const handleCallbacks = () => {
        if (this.status === "REJECTED") {
          const result = onRejected(this.result);
          if (result instanceof MyPromise) {
            result.then(resolve);
          } else {
            resolve(result);
          }
        } else if (this.status === "PENDING") {
          this.callbacks.push(handleCallbacks);
        }
      };

      handleCallbacks();
    });
  }

  finally(onFinally) {
    return new MyPromise((resolve) => {
      const handleCallbacks = () => {
        const result = onFinally();
        if (result instanceof MyPromise) {
          result.then(resolve);
        } else {
          resolve(result);
        }
      };

      this.callbacks.push(handleCallbacks);
      handleCallbacks();
    });
  }
}

function getNumber() {
  const randomNumber = Math.round(Math.random() * 1000);
  const isDivisibleByFive = randomNumber % 5 === 0;

  return new MyPromise((resolve, reject) => {
    const startTime = new Date().getTime();

    if (isDivisibleByFive) {
      reject({
        message: `Number ${randomNumber} is divisible by 5 and rejected`,
        time: new Date().getTime() - startTime,
      });
    } else {
      resolve({
        message: `Number ${randomNumber} is not divisible by 5 and resolved`,
        time: new Date().getTime() - startTime,
      });
    }
  });
}

getNumber()
  .then((result) => {
    console.log(result.message);
    console.log(`Time taken: ${result.time}ms`);
  })
  .catch((error) => {
    console.error(error.message);
    console.log(`Time taken: ${error.time}ms`);
  });
