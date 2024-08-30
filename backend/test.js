const obj = {
    logThisLater() {
    setTimeout(() => console.log(this), 1000);
    }
  };
  obj.logThisLater();