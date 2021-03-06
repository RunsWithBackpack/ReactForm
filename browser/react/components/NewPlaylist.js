import React from 'react';

export const NewPlaylist = function (props) {
  return (
  <div className="well">
    <form className="form-horizontal" onSubmit={props.handleSubmit}>
      <fieldset>
        <legend>New Playlist</legend>
        <div className="form-group">
          <label className="col-xs-2 control-label">Name</label>
          <div className="col-xs-10">
            <input className="form-control" type="text" value={props.value} onChange={props.addPlaylist}/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-10 col-xs-offset-2">
            <button type="submit" className="btn btn-success" disabled={props.disabledorNot}>Create Playlist</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
)}

export const Warning = function (props){
  if(props.warningBool){return(<div className="alert alert-warning">Please enter a name</div>)}
  else{return(<div></div>)};
}
