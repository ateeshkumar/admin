import React from 'react'

function Card({title , value , bgColor}) {
  return (
      <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
          <div className={`card ${bgColor} p-3`}>
            <div className="card-wrap">
              <div className="card-header text-center">
                <p>
                  <strong>{title}</strong>
                </p>
              </div>
              <div className="text-5xl font-bold flex justify-center items-center">
                <h1> {value} </h1>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Card
