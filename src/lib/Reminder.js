export class Reminder {
  constructor(opts) {
    this.color = opts.color;
    this.description = opts.description || 'Unnamed reminder';
    this.day = opts.day;
    this.time = opts.time;
  }

  set color() {
    // valid hexa
  }

  set description() {
    // max 30 chars
  }
}
