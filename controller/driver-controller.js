const drivers = [
    {id:1, name:'Tharuka', email:'tharuka@gmail.com', password:'tharuka'},
    {id:2, name:'Prageesha', email:'pragesha@gmail.com', password:'prageesha'},
    {id:3, name:'Malikshi', email:'malikshi@gmail.com', password:'malikshi'},
    {id:4, name:'Anuradha', email:'anuradha@gmail.com', password:'anuradha'},
    {id:5, name:'Thilina', email:'thilina@gmail.com', password:'thilina'},
]

exports.allDrivers = async(req,res)=>{
    res.status(200).send({drivers})
}

exports.addDriver = async(req,res)=>{
    
    const driver = req.body
    const id = drivers.length + 1
   
    let newDirver = {...driver, id}
    drivers.push(newDirver)
    res.status(201).send({message:'Driver added successfully'})
}

exports.findDriver = async(req,res)=>{
    const driverId = req.params.id
    const driver = drivers.find(driver=>driver.id == driverId)
    if(!driver){
        return res.status(404).send('Can\'t find the driver' )
    }
    return res.status(200).send(driver)
}

exports.deleteDriver = async(req,res)=>{
    const driverId = req.params.id

    const driverIndex = drivers.findIndex((driver)=>driver.id == driverId)
    if(driverIndex == -1){
        return res.status(404).send('Can not find the dirver')
    }

    const driver = drivers.splice(driverIndex, 1)
    res.status(200).send({message:'Remove driver successfully'})

    
}