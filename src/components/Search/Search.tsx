import debounce from 'lodash.debounce'

import { useAppDispatch } from 'app/hooks'
import { setSearch } from 'app/features/filterSlice'

import styles from './Search.module.scss'

import Icon, { Types } from 'components/ui/Icon'

const Search = () => {
  const dispatch = useAppDispatch()

  const handleChange = (e: any) => dispatch(setSearch(e.target.value))

  return (
    <fieldset className={styles.search}>
      <input
        onChange={debounce(handleChange, 500)}
        type="text"
        placeholder="Type what you are looking for..."
      />
      <Icon type={Types.search} />
    </fieldset>
  )
}

export default Search
