import React from 'react'
import clsx from 'clsx'
import styles from './table.module.css'

export default ({ tableName }) => {
  return <div className={clsx("card", styles.table)}>
    <div className="card__header">
      <h3>{tableName}</h3>
    </div>
  </div>
}
