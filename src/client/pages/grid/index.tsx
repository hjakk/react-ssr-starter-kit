import * as React from 'react'
import { Grid } from '@project/ui'
import { css } from '../../libs'
import style from './style.styl'


function GridPage(): JSX.Element {
  return (
    <div className={ css.center }>
      <h1>Grid</h1>

      <p>
        <b>Grid</b>:
      </p>

      <Grid hide="640">
        <Grid.Col>
          <div className={ style.block } />
        </Grid.Col>
        <Grid.Col>
          <div className={ style.block } />
        </Grid.Col>
        <Grid.Col>
          <div className={ style.block } />
        </Grid.Col>
        <Grid.Col>
          <div className={ style.block } />
        </Grid.Col>
      </Grid>

      <p>
        <b>Padded, row 1</b>:
      </p>

      <Grid jc="center">
        <Grid.Col w800="4">
          <div className={ style.block } />
        </Grid.Col>
        <Grid.Col w800="4">
          <div className={ style.block } />
        </Grid.Col>
        <Grid.Col w800="4">
          <div className={ style.block } />
        </Grid.Col>
      </Grid>

      <p>
        <b>Padded, row 2</b>:
      </p>

      <Grid jc="space-between">
        <Grid.Col w800="4">
          <div className={ style.block } />
        </Grid.Col>
        <Grid.Col w800="4">
          <div className={ style.block } />
        </Grid.Col>
        <Grid.Col w800="4">
          <div className={ style.block } />
        </Grid.Col>
      </Grid>

      <p>
        <b>Padded 3, row 3</b>:
      </p>

      <Grid>
        <Grid.Col>
          <div className={ style.block } />
        </Grid.Col>
        <Grid.Col>
          <div className={ style.block } />
        </Grid.Col>
        <Grid.Col>
          <div className={ style.block } />
        </Grid.Col>
      </Grid>

      <p>
        <b>With content</b>:
      </p>

      <Grid>
        <Grid.Col w640="7">
          <div className={ style.block }>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, enim hic. Optio, mollitia repellat adipisci ullam debitis fugit a alias nam qui quis expedita praesentium similique accusantium quaerat dolore rerum.
          </div>
        </Grid.Col>

        <Grid.Col w640="7">
          <div className={ style.block }>
            asdjgdf gosdj fogisj doifgjs oidjfgs dfg sdf gsd fsgdf
          </div>
        </Grid.Col>

        <Grid.Col hide="640">
          <div className={ style.block }>
            isodjsdifjgsoidjfogisjdfoigjsdofijgsdifjgshdfgisuhdfoigshdfighsdfghsdfhgsidfhgsidhfgisdhfgiushdfiguhsdfighsdiufhgsidhfgishdfgishdfigushdfgh
          </div>
        </Grid.Col>
      </Grid>

    </div>
  )
}

export default GridPage
