import * as React from 'react'
import { Divider, Typ, Grid, Modal, Button } from 'react-project-ui'
import { withModal, SomeModalLayout } from '../../containers/modals'


function ExampleModal(props: any): React.ReactElement {
  return (
    <div>
      <Divider size="3">
        <Typ as="h3" u>Modal</Typ>
      </Divider>

      {/* <Typ as="h3">Sizes</Typ> */}
      <Button onClick={ (): void => props.toggleModal((props): unknown => <SomeModalLayout title="Some modal title" />) }>Open modal</Button>
      {/* <Grid padded>
      </Grid> */}
    </div>
  )
}

export default React.memo(withModal(ExampleModal))
