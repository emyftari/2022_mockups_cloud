import { FC } from 'react'

import styles from './Download.module.scss'

import Button, { Types } from 'components/ui/Button'

const Download: FC<any> = ({ filepath, downloadLink }) => {
  return (
    <div className={styles.download}>
      {downloadLink ? (
        <iframe frameBorder={0} src={downloadLink}></iframe>
      ) : (
        <>
          {filepath && (
            <a href={filepath}>
              <Button type={Types.primary}>
                <span>DOWNLOAD</span>
              </Button>
            </a>
          )}
        </>
      )}
    </div>
  )
}

export default Download
