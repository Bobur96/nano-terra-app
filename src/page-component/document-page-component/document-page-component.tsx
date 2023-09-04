import './document-page.css'

const DocumentPageComponent = () => {
  return <div className='document'>
    <div className="left">
      <div className="left_top content"></div>
      <div className="left_middle content"></div>
      <div className="left_bottom content"></div>
    </div>
    <div className="right">
      <div className="right_top content"></div>
      <div className="right_bottom content"></div>
    </div>
  </div>;
};

export default DocumentPageComponent;
