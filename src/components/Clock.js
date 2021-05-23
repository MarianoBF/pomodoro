function Clock({time}) {
    return(<p className="timer" id="time-left">
    {time > 600
      ? Math.floor(time / 60)
      : "0" + Math.floor(time / 60)}
    :
    {time % 60 > 9
      ? time % 60
      : "0" + (time % 60)}
  </p> )
}

export default Clock