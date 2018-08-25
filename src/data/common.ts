export class BaseModel {
    id: number;
    createdBy;
    updatedBy;
    createdDate;
    updateDate;
    isActive = true;
}

export class Utils {
    compareWithId(object1: any, object2: any): boolean {
        return object1 && object2 ? object1.id === object2.id : false;
    }
}
