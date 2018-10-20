import uuidv4 from 'uuid/v4';

export class Reminder {
  constructor(opts) {
    if (opts.date && opts.time !== null) {
      this.uuid = opts.uuid || uuidv4();
      this.date = opts.date.getUTCMilliseconds();
      this.time = opts.time;
      this.color = opts.color;
      this.description = opts.description || 'Unnamed reminder';
    } else {
      throw new Error('Undefined date or time');
    }
  }

  set color(color) {
    const hexa = /[0-9A-Fa-f]{6}/g;
    return hexa.test(color) ? `#${color}` : 'red';
  }

  set description(description) {
    const MAX_CHAR_SIZE = 30;
    return description.substring(0, MAX_CHAR_SIZE);
  }
}
