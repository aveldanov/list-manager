import React from 'react'

const List = () => {
  return (
    <div className="container">
      LIST


 {/* START */}

      <div className="list-group col-12 col-sm-12 border dashboard-card">
        <a href="#" className="list-group-item list-group-item-action active">
          <div className="d-flex w-100 justify-content-between ">
            <h5 className="mb-1">Person 1</h5>
          </div>


        </a>
        <a href="#" className="list-group-item list-group-item-action dashboard-line">
          <div className="d-flex w-100 justify-content-between">

            <small className=" text-muted">2 days ago</small>
            <button type="button" className="close" aria-label="Close"

            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <p className="mb-2 text-truncate">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">

            <small className=" text-muted">2 days ago</small>
            <button type="button" className="close" aria-label="Close"

            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <p className="mb-2 text-truncate">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        </a>
      </div>

      {/* END */}



      <div className="input-group mt-3 col-12 col-sm-12">
        <input type="text" className="form-control" placeholder="...add item" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
        </div>
      </div>
    </div>
  )
}

export default List
