import { model, Schema } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";
import { Error } from "mongoose";

const academicSemesterSchema = new Schema<TAcademicSemester>({
    name: {
        type: String,
        enum: {
            values: ['Autumn', 'Summer', "Fall"],
            message: "{VALUE} is not valid! Try to use 'Spring', 'Summer' or 'Fall'"
        },
        trim: true,
        required: true
    },
    year: { type: String, required: true },
    code: {
        type: String,
        enum: {
            values: ['01', '02', "03"],
            message: "{VALUE} is not valid! Try to use '01', '02' or '03'"
        },
        trim: true,
        required: true
    },

    startMonth: {
        type: String,
        enum: {
            values: ['January', 'February', 'March', 'April', 'May', 'June', 'July'
                , 'August', 'September', 'October', 'November', 'December'],
            message: "{VALUE} is not valid! "
        },
        required: true,
        trim: true
    },
    endMonth: {
        type: String,
        enum: {
            values: ['January', 'February', 'March', 'April', 'May', 'June', 'July'
                , 'August', 'September', 'October', 'November', 'December'],
            message: "{VALUE} is not valid! "
        },
        required: true,
        trim: true
    },
}, { timestamps: true });

academicSemesterSchema.pre("save", async function (next) {
    const isSemesterExist = await AcademicSemesterModel.findOne({
        year: this.year,
        name: this.name
    })
    if(isSemesterExist){
        throw new Error("Semester already exist, You can not crate duplicate semester in same year")
    }
    else{
        next()
    }

})


export const AcademicSemesterModel = model<TAcademicSemester>('AcademicSemester', academicSemesterSchema);