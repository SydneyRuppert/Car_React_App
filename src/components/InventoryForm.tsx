import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from 'react-redux'
import { chooseFirst, chooseLast, chooseEmail, chooseAddress, choosePhone, chooseMake, chooseModel, chooseYear } from '../redux/slices/RootSlice'

interface InvenoryFormProps {
  id?: string[]
}

const InventoryForm = ( props:InvenoryFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
    } else {
      dispatch(chooseFirst(data.first));
      dispatch(chooseLast(data.last));
      dispatch(chooseEmail(data.email));
      dispatch(choosePhone(data.phone_number));
      dispatch(chooseAddress(data.address));
      dispatch(chooseMake(data.car_make));
      dispatch(chooseModel(data.car_model));
      dispatch(chooseYear(data.car_year));
      

      server_calls.create(store.getState())
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Contact Name</label>
          <Input {...register('first')} name='first' placeholder="First" />
        </div>
        <div>
          <label htmlFor="name">Contact Name</label>
          <Input {...register('last')} name='last' placeholder="Last" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input {...register('email')} name='email' placeholder="Email" />
        </div>
        <div>
          <label htmlFor="phone_number">Phone Number</label>
          <Input {...register('phone_number')} name='phone_number' placeholder="Phone Number" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <Input {...register('address')} name='address' placeholder="Address" />
        </div>
        <div>
          <label htmlFor="car_make">Make</label>
          <Input {...register('car_make')} name='car_make' placeholder="Make" />
        </div>
        <div>
          <label htmlFor="car_model">Model</label>
          <Input {...register('car_model')} name='car_model' placeholder="Model" />
        </div>
        <div>
          <label htmlFor="car_year">Year</label>
          <Input {...register('car_year')} name='car_year' placeholder="Year" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default InventoryForm

    