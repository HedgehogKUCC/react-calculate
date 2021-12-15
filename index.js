function Calculate() {
  return (
    <div className="wrap">
      <div className="viewBar">
        <div className="result">0</div>
        <div>+</div>
      </div>
      <div className="btn-group">
        <div className="arithmetic">
          <button type="button" className="btn">+</button>
          <button type="button" className="btn">-</button>
          <button type="button" className="btn">*</button>
          <button type="button" className="btn">/</button>
        </div>
        <div className="numeric">
          <button type="button" className="btn">7</button>
          <button type="button" className="btn">8</button>
          <button type="button" className="btn">9</button>
          <button type="button" className="btn">4</button>
          <button type="button" className="btn">5</button>
          <button type="button" className="btn">6</button>
          <button type="button" className="btn">1</button>
          <button type="button" className="btn">2</button>
          <button type="button" className="btn">3</button>
          <button style={{ width: 100 }} type="button" className="btn">0</button>
          <button type="button" className="btn">C</button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Calculate />, document.getElementById('root'));