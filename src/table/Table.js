import React, { useMemo } from "react";
import clsx from "clsx";
import styles from "./table.module.css";

export default ({ elements }) => {
  const toShow = useMemo(() => {
    return (
      <>
        {elements.map((e, i) => {
          return (
            <div key={i} className={clsx(styles.line, styles.code)}>
              <div className={clsx('f-1', styles.classUtility)}>{e.class}</div>
              <div className="f-2">{e.value}</div>
            </div>
          );
        })}
      </>
    );
  }, []);

  return (
    <>
      <div className={clsx(styles.line, styles.tableHeader)}>
        <div className="f-1">Class</div>
        <div className="f-2">Properties</div>
      </div>
      <div className={styles.table}>
        <div>{toShow}</div>
      </div>
    </>
  );
};
