const resolvers = {
    Query: {
        cars: (parent,args,{models}) => models.cars,
        car: (parent,{ id },{models}) =>{
            const car =  models.cars.filter(car => car.id == id);
            return car[0];

        },
    },
    Car : {
        owner : (parent,args,{models}) => models.users[parent.ownedBy -1]
    }

};

module.exports = resolvers