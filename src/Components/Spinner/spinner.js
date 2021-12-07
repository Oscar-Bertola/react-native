import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const Spinner = () => (
  <div>
    

   

    <Segment>
      <Dimmer active inverted>
        <Loader size='medium'>Cargando</Loader>
      </Dimmer>

      <Image src='/images/wireframe/paragraph.png' />
    </Segment>

    
  </div>
)

export default Spinner