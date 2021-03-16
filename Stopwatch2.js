function StopWatch2() {
  // Private variables
  let startTime,
    endTime,
    running,
    duration = 0;

  Object.defineProperty(this, 'duration', {
    get: () => {
      return duration;
    },
    set: (value) => {
      duration = value;
    },
  });

  Object.defineProperty(this, 'startTime', {
    get: () => {
      return startTime;
    },
  });
  Object.defineProperty(this, 'endTime', {
    get: () => {
      return endTime;
    },
  });
  Object.defineProperty(this, 'running', {
    get: () => {
      return running;
    },
  });
}

StopWatch2.prototype.start = () => {
  if (this.running) throw new Error('Stopwatch is already started');

  this.running = true;

  this.startTime = new Date();
};

StopWatch2.prototype.stop = () => {
  if (!this.running) throw new Error('Stopwatch has no started');

  this.running = false;

  this.endTime = new Date();

  const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
  this.duration += seconds;
};

StopWatch2.prototype.reset = () => {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  this.duration = 0;
};

// const sw2 = new StopWatch2();
