db = db.getSiblingDB('sample_tp2');
db.inventors.drop();
db.inventors.insertMany([
    {        
        "first": "Isaac",
        "last": "Newton",
        "year": 1643
       },
       {
        "first": "Galileo",
        "last": "Galilei",
        "year": 1564
       },
       {        
        "first": "Marie",
        "last": "Curie",
        "year": 1867
       },
       {
        "first": "Johannes",
        "last": "Kepler",
        "year": 1571
       },
       {        
        "first": "Nicolaus",
        "last": "Copernicus",
        "year": 1473
       },
       {        
        "first": "Max",
        "last": "Planck",
        "year": 1858
       },
       {
        "first": "Juan",
        "last": "Perez",
        "year": 1978
       },
       {        
        "first": "Juan",
        "last": "Perez",
        "year": 1976
       },
       {        
        "first": "René",
        "last": "Favarolo",
        "year": 1923
       },
       {        
        "first": "Ladislao",
        "last": "Biro",
        "year": 1899
       },
       {
        "first": "Pepe",
        "last": "Trueno",
        "year": 1975        
       },
       {
        "first": "Juan",
        "last": "Perez Blanco.",
        "year": 1860
       }
]);