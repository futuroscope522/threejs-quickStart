import EventEmitter from "./EventEmitter";

export default class Time extends EventEmitter {
  constructor() {
    super();
    // Setup
    this.start = Date.now();
    this.current = this.start;
    this.elapsed = 0;
    // 自上一帧以来花费了多少时间。默认将其设置为16，这接近于60fps 下两帧之间的毫秒数。
    this.delta = 16;
    window.requestAnimationFrame(() => {
      this.tick();
    });
  }
  tick() {
    const currentTime = Date.now();
    this.delta = currentTime - this.current;
    this.current = currentTime;
    this.elapsed = this.current - this.start;
    this.trigger("tick");
    window.requestAnimationFrame(() => {
      this.tick();
    });
  }
}
