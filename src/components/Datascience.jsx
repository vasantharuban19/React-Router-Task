import React from 'react'

function Datascience({science}) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
    {science.map((ele,i)=>(
    <div className="col">
      <div className="card" key={i}>
        <img src={ele.image} className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{ele.title}</h5>
          <p className="card-text">{ele.discription}</p>
          <a className="link" href="http://">READ MORE--</a>
        </div>
        <div className="card-footer">
        <small className="text-body-secondary">{ele.date} • {ele.comments}   </small>
      </div>
    </div>
      </div>
      ))}
    </div>
  )
}

export default Datascience