import React from 'react';
import PropTypes from 'prop-types';

class PopoverView extends React.PureComponent {
  onClose(e) {
    if (this.props.onClose) {
      this.props.onClose(e);
    }
  }

  render() {
    const { open, children } = this.props;

    return (
      <React.Fragment>
        {open ? <div className="popover__overlay" onClick={this.onClose.bind(this)} /> : null}
        <div className="popover__wrapper">
          <svg className="popover__arrow">
            <polygon className="popover__arrow__tip" points="24,0 0,24, 24,48" />
          </svg>
          {children}
        </div>
      </React.Fragment>
    );
  }
}

PopoverView.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

export default PopoverView;
