const nodemailer = require ('nodemailer')


const transporter = nodemailer.createTransport ({
  service:'Gmail',
  auth:{
    user:'andrewvalenciamunoz@gmail.com',
    pass:'ironhack2018'
  }
})


exports.sendMail = (email,username)=>{
  transporter.sendMail({
    from:'Equipo Team Mates',
    to:email,
    subject:'Registro Team Mates',
    text:'',
    html:`

    <img src="https://res.cloudinary.com/dqdpblijd/image/upload/v1538104514/teammates/Logo2.png">
    
        <h1>Hola ${username} bienvenido al equipo titular Team Mates</h1>
        
        <p>Ahora formas parte de la comunidad más grande de jugadores aficionados de fútbol. </p>
        <p>Podrás crear partidos amistosos, torneos y asistir a los diferentes eventos creados por jugadores como tú.</p>
        
        <h3>Nos vemos en las canchas :)</h3>`
  })
  .then (info => console.log (info))
  .catch (e=>console.log (e))
}

