
class GeneralButton extends React.Component {
  render() {
    let style;

    if (this.props.text === '0') {
      style = {
        width: '100px',
      }
    } else {
      style = {
        width: '50px',
      }
    }

    return (
      <button type="button" style={style} className="btn">{this.props.text}</button>
    );
  }
}

class ArithmeticButton extends React.Component {
  render() {
    return (
      <button type="button" className="btn">{this.props.text}</button>
    );
  }
}

function Calculate() {
  return (
    <div className="wrap">
      <div className="viewBar">
        <div className="result">0</div>
        <div>+</div>
      </div>
      <div className="btn-group">
        <div className="arithmetic">
          <ArithmeticButton text="+" />
          <ArithmeticButton text="-" />
          <ArithmeticButton text="*" />
          <ArithmeticButton text="/" />
        </div>
        <div className="numeric">
          <GeneralButton text="7" />
          <GeneralButton text="8" />
          <GeneralButton text="9" />
          <GeneralButton text="4" />
          <GeneralButton text="5" />
          <GeneralButton text="6" />
          <GeneralButton text="1" />
          <GeneralButton text="2" />
          <GeneralButton text="3" />
          <GeneralButton text="0" />
          <GeneralButton text="C" />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Calculate />, document.getElementById('root'));