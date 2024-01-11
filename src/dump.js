const status = {isWorking: false};

const action = () => {
  console.log("called!");
};

const callMe = () => {
  if (status.isWorking) return;

  status.isWorking = true;
  setTimeout(() => {action(); status.isWorking = false}, 0);
};

callMe();
callMe();
await new Promise(res => setTimeout(res, 3000));
callMe();
callMe();
callMe();
callMe();
callMe();
callMe();
callMe();
callMe();

// const sleep = async () => {
//   await
// };
