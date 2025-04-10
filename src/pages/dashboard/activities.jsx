import React from "react";
import {
  Typography,
  ButtonGroup,
  Button,
  Card,
  CardHeader,
  CardBody,
  Input,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { FaRunning } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import FileUpload from "@/widgets/fileupload";

export function Activities() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;
  const [showPage, setShowPage] = React.useState('workout');

  return (
    <div className="mx-auto my-10 flex max-w-screen-lg flex-col gap-8">
        <ButtonGroup fullWidth>
            <Button className={`${showPage==="workout"?"bg-green-500":""} grid justify-items-center items-center gap-3`}
                onClick={()=>setShowPage('workout')}>
                <FaRunning className="text-2xl"/>Workout
            </Button>
            <Button className={`${showPage==="eating"?"bg-green-500":""} grid justify-items-center items-center gap-3`}
                onClick={()=>setShowPage('eating')}>
                <IoFastFoodOutline className="text-2xl"/>Eating
            </Button>
            <Button className={`${showPage==="sleeping"?"bg-green-500":""} grid justify-items-center items-center gap-3`}
                onClick={()=>setShowPage('sleeping')}>
                <FaBed className="text-2xl"/>Sleeping
            </Button>
        </ButtonGroup>
      <Card className={`${showPage==='workout'?'visible':'hidden'} dark:bg-gray-800`}>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4"
        >
          <Typography className="font-sarabun dark:text-[white]" variant="h5" color="blue-gray">
            บันทึกการออกกำลังกาย
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 p-4">
          <FileUpload />
        </CardBody>
      </Card>
      <Card className={showPage==='eating'?'visible':'hidden'}>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4"
        >
          <Typography className="font-sarabun" variant="h5" color="blue-gray">
            บันทึกการกินอาหาร
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 p-4">
        </CardBody>
      </Card>
      <Card className={showPage==='sleeping'?'visible':'hidden'}>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4"
        >
          <Typography className="font-sarabun" variant="h5" color="blue-gray">
            บันทึกการนอนหลับ
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 p-4">
        </CardBody>
      </Card>
    </div>
  );
}

export default Activities;
