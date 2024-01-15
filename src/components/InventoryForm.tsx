import Button from "./Button"
import Input from "./Input"
import { auth} from '../config/firebase'
import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from 'react-redux'
import { chooseName, chooseEmail, chooseAddress, choosePhone, chooseMake, chooseModel, chooseYear, chooseUID } from '../redux/slices/RootSlice'

interface InvenoryFormProps {
  id?: string[]
}

const InventoryForm = ( props:InvenoryFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    dispatch(chooseName(data.name));
    dispatch(chooseEmail(data.email));
    dispatch(choosePhone(data.phone_number));
    dispatch(chooseAddress(data.address));
    dispatch(chooseMake(data.car_make));
    dispatch(chooseModel(data.car_model));
    dispatch(chooseYear(data.car_year));
    dispatch(chooseUID(auth.currentUser?.uid));

    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], store.getState())
      console.log(`Updated: ${ data.name } ${ props.id }`)
      setTimeout(()=>{window.location.reload()}, 1000)
      //event.target.reset()
    } else {

      server_calls.create(store.getState())
      setTimeout(()=>{window.location.reload()}, 1000)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Contacts Full Name</label>
          <Input {...register('name')} name='name' placeholder="Full Name" />
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

    