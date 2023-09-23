import { Button, Card } from 'react-bootstrap';


function Ejercicio({ titulo, descripcion, dificultad, idEj }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {descripcion}<br />
          Tema: {dificultad}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Ejercicio;