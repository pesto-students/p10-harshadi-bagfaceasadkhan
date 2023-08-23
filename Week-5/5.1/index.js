// Using async await
async function executeTasksAsync() {
  try {
    const result1 = await doTask1();

    console.log(result1);

    const result2 = await doTask2();
    console.log(result2);

    const result3 = await doTask3();
    console.log(result3);
  } catch (error) {
    console.log(error);
  }
}

async function doTask1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 complete");
    }, 2000);
  });
}

async function doTask2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2 complete");
    }, 1500);
  });
}

async function doTask3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 3 complete");
    }, 1000);
  });
}

executeTasksAsync();

//Using generators

function* executeTasksGenerator() {
  try {
    const result1 = yield doTask1();
    console.log(result1);

    const result2 = yield doTask2();
    console.log(result2);

    const result3 = yield doTask3();
    console.log(result3);
  } catch (error) {
    console.log(error);
  }
}

function doTask1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 complete");
    }, 2000);
  });
}

function doTask2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2 complete");
    }, 1500);
  });
}

function doTask3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 3 complete");
    }, 1000);
  });
}

const generator = executeTasksGenerator();

function handleGeneratorResult(result) {
  if (result.done) {
    return;
  }

  result.value
    .then((res) => {
      handleGeneratorResult(generator.next(res));
    })
    .catch((error) => {
      handleGeneratorResult(generator.throw(error));
    });
}

handleGeneratorResult(generator.next());
