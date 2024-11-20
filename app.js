const thingsInMyRoom = [
    'random elephant', 
    'random elephant', 
    'random elephant', 
    'random elephant'
  ];
  
  const isEverythingInMyRoomARandomElephant = thingsInMyRoom.every(isThisMeet => {
    return isThisMeet ==='random elephant'

  }
  )
  console.log(isEverythingInMyRoomARandomElephant)