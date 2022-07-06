import { FC } from 'react'

import styles from './Download.module.scss'

import Share from 'components/Share'
import Button, { Types } from 'components/ui/Button'
import Icon, { Types as IconTypes } from 'components/ui/Icon'

const Download: FC<any> = ({ filepath, downloadLink, url, media }) => {
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
      <div className={styles.footer}>
        <button>
          <Icon type={IconTypes.heart} />
          DONATE
        </button>
        <Share url={url} media={media} />
      </div>
    </div>
  )
}

export default Download
