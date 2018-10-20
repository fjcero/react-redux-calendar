import uuidv4 from 'uuid/v4';

export class Reminder {
  constructor(opts) {
    this.uuid = opts.uuid || uuidv4();
    this.color = opts.color;
    this.description = opts.description || 'Unnamed reminder';
    this.day = opts.day;
    this.time = opts.time;
  }

  set color(color) {
    const hexa = /[0-9A-Fa-f]{6}/g;

    if (hexa.test(color)) {
      this.color = `#${color}`;
    } else {
      this.color = 'red';
    }
  }

  set description(description) {
    const MAX_CHAR_SIZE = 30;
    this.description = description.substring(0, MAX_CHAR_SIZE);
  }
}
