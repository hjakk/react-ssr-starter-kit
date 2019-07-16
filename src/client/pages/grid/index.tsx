import * as React from 'react'
import { Grid } from '../../components'
import { css } from '../../libs'
import style from './style.styl'


function GridPage(): JSX.Element {
  return (
    <div className={ css.center }>
      <h1>Grid</h1>

      <p>
        <b>Grid</b>:
      </p>

      <Grid>
        <Grid item w640="4">
          <div className={ style.block } />
        </Grid>
        <Grid item w640="4">
          <div className={ style.block } />
        </Grid>
        <Grid item w640="4">
          <div className={ style.block } />
        </Grid>
        <Grid item w640="4">
          <div className={ style.block } />
        </Grid>
      </Grid>
      
      <p>
        <b>Padded, row 1</b>:
      </p>

      <Grid jc="center" row="1" padded>
        <Grid item w640="5">
          <div className={ style.block } />
        </Grid>
        <Grid item w640="5">
          <div className={ style.block } />
        </Grid>
        <Grid item w640="5">
          <div className={ style.block } />
        </Grid>
      </Grid>

      <p>
        <b>Padded, row 2</b>:
      </p>

      <Grid jc="space-between" row="2" padded>
        <Grid item w640="5">
          <div className={ style.block } />
        </Grid>
        <Grid item w640="5">
          <div className={ style.block } />
        </Grid>
        <Grid item w640="5">
          <div className={ style.block } />
        </Grid>
      </Grid>

      <p>
        <b>Padded 3, row 3</b>:
      </p>

      <Grid padded row="3">
        <Grid item w640="5">
          <div className={ style.block } />
        </Grid>
        <Grid item w640="5">
          <div className={ style.block } />
        </Grid>
        <Grid item w640="5">
          <div className={ style.block } />
        </Grid>
      </Grid>

      <p>
        <b>With content</b>:
      </p>

      <Grid padded row="1">
        <Grid item auto w640="8" w800="5">
          <div className={ style.block }>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, enim hic. Optio, mollitia repellat adipisci ullam debitis fugit a alias nam qui quis expedita praesentium similique accusantium quaerat dolore rerum.
          </div>
        </Grid>

        <Grid item auto w640="8" w800="5">
          <div className={ style.block }>
            asdjgdf gosdj fogisj doifgjs oidjfgs dfg sdf gsd fsgdf
          </div>
        </Grid>

        <Grid item auto w800="5">
          <div className={ style.block }>
            isodjsdifjgsoidjfogisjdfoigjsdofijgsdifjgshdfgisuhdfoigshdfighsdfghsdfhgsidfhgsidhfgisdhfgiushdfiguhsdfighsdiufhgsidhfgishdfgishdfigushdfgh
          </div>
        </Grid>
      </Grid>

    </div>
  )
}

export default GridPage
