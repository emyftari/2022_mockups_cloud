import { FC, useState } from 'react'
import toast from 'react-hot-toast'

import { client } from 'utils/client'

import styles from './Report.module.scss'

import Button, { Types as ButtonTypes } from 'components/ui/Button'
import Icon, { Types as IconTypes } from 'components/ui/Icon'

const Report: FC<any> = ({ close, id }) => {
  const [reason, setReason] = useState('')

  const handleChange = (e: any) => setReason(e.target.value)

  const handleSubmit = async () => {
    try {
      await client.post(`/reports/${id}/report`, {
        reason,
        domain: 3,
        details: 'Details empty',
      })
      toast.success('Post reported succesfully!')
      close()
    } catch (error: any) {
      toast.error(error.response.data.message)
      close()
    }
  }

  return (
    <div className={styles.report} onClick={(e) => e.stopPropagation()}>
      <div className={styles.close} onClick={close}>
        <Icon type={IconTypes.close} />
      </div>
      <h1>Report Project</h1>
      <form onChange={handleChange} onSubmit={(e) => e.preventDefault()}>
        <label>
          <input type="radio" name="reason" value="Spam/Irrelevant" />
          Spam/Irrelevant
        </label>
        <label>
          <input type="radio" name="reason" value="Adult content" />
          Adult content
        </label>
        <label>
          <input type="radio" name="reason" value="Fraud/Scam" />
          Fraud/Scam
        </label>
        <label>
          <input type="radio" name="reason" value="Offensive/Illegal" />
          Offensive/Illegal
        </label>
        <label>
          <input type="radio" name="reason" value="Imminent physical harm" />
          Imminent physical harm
        </label>
        <label>
          <input type="radio" name="reason" value="Infringes my rights" />
          Infringes my rights
        </label>
        <div className={styles.buttons}>
          <Button type={ButtonTypes.primary} onClick={handleSubmit}>
            <span>REPORT</span>
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Report
