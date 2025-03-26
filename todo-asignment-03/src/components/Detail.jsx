import React from "react";

function Detail({ task, setDetailTab}) {
  return (
    <div className="detail-container">
      <div className="backdrop"></div>
      <div className="detail-card">
        {task.image && (
          <img
            src={task.image}
            className="card-img-top"
            alt="Task Image"
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{task.title}</h5>
          <hr style={{width:'100%'}} />
          <p className="card-text" style={{ whiteSpace: 'pre-line' }}>{task.description}</p>
          <p className="card-text">
            <small className="text-muted">ID: {task.id}</small>
          </p>
          <button className="close-button" onClick={() => setDetailTab(false)}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
