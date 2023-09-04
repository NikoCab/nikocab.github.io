import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Modal } from "@mui/material";

// Los datos de los servicios
const servicios = [
  {
    titulo: "Diseño web",
    descripcion: "Creamos sitios web atractivos y funcionales para tu negocio.",
    imagen: "https://source.unsplash.com/300x200/?webdesign",
    detalle: "Ofrecemos diseño web personalizado, adaptado a tus necesidades y objetivos. Nos encargamos de todo el proceso, desde el diseño gráfico hasta la programación y el mantenimiento. Nuestros sitios web son responsivos, optimizados para SEO y fáciles de usar."
  },
  {
    titulo: "Marketing digital",
    descripcion: "Te ayudamos a llegar a tu público objetivo y a aumentar tus ventas.",
    imagen: "https://source.unsplash.com/300x200/?digitalmarketing",
    detalle: "Ofrecemos servicios de marketing digital integral, incluyendo estrategia, planificación, ejecución y análisis. Nos especializamos en redes sociales, email marketing, publicidad online y contenido de valor."
  },
  {
    titulo: "Branding",
    descripcion: "Creamos la identidad visual de tu marca y la hacemos memorable.",
    imagen: "https://source.unsplash.com/300x200/?branding",
    detalle: "Ofrecemos servicios de branding que abarcan desde el naming hasta el diseño de logo, pasando por el manual de identidad corporativa y el diseño de papelería. Creamos marcas que transmiten tu esencia y te diferencian de la competencia."
  },
  {
    titulo: "Fotografía",
    descripcion: "Capturamos la esencia de tu producto o servicio con imágenes de calidad.",
    imagen: "https://source.unsplash.com/300x200/?photography",
    detalle: "Ofrecemos servicios de fotografía profesional para todo tipo de proyectos. Contamos con equipo y experiencia para realizar sesiones fotográficas en estudio o en exteriores. Editamos y retocamos las imágenes para que queden perfectas."
  }
];

// El componente Card
function CardServicio({ servicio, seleccionar }) {
  return (
    <Card className="card" sx={{ maxWidth: 300 }} onClick={() => seleccionar(servicio)}>
      <CardMedia
        component="img"
        height="200"
        image={servicio.imagen}
        alt={servicio.titulo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {servicio.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {servicio.descripcion}
        </Typography>
      </CardContent>
    </Card>
  );
}

// El componente Detalle
function DetalleServicio({ servicio, seleccionar  }) { // Añade seleccionar como una propiedad
  return (
    <Modal
      open={servicio !== null}
      onClose={() => seleccionar(null)} // Usa seleccionar para cerrar el modal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div sx={{ 
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {servicio.titulo}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {servicio.detalle}
        </Typography>
      </div>
    </Modal>
  );
}

// El componente padre
function Services() {
  // El estado del servicio seleccionado
  const [servicio, setServicio] = useState(null);

  // La función que cambia el estado del servicio seleccionado
  const seleccionar = (servicio) => {
    setServicio(servicio);
  };

  return (
    <div className="Servicios">
       <div className="cards">
        {servicios.map((servicio) => (
          <CardServicio
            key={servicio.titulo}
            servicio={servicio}
            seleccionar={seleccionar}
          />
        ))}
      </div>
      {servicio && <DetalleServicio servicio={servicio} seleccionar={seleccionar} />} 
    </div>
  );
}

export default Services;
