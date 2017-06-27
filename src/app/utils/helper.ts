export class Helper {
    getFieldValue(object: any, field: string): string {
        let fieldPath = field.split('.');
        while (fieldPath.length) {
            object = object[fieldPath.shift()];
        }
        if (object === '' || object === undefined || object === null) {
            return ''
        }
        return object.toLowerCase();
    }
    filter(list: any, fieldList: string[], text: string) {
        if (text === '' || text === undefined || text === null) {
            return list;
        }
        text = text.toLowerCase();
        return list.filter(p => {
            for (let field of fieldList) {
                if (field !== '') {
                    let value = this.getFieldValue(p, field);
                    if (value.includes(text)) {
                        return true;
                    }
                }
            }
            return false;
        });
    }
    sort(list: any[], field: string, isDescending: boolean = false){
        if (isDescending) {
            return this.orderByDescending(list, field);
        }
        return this.orderBy(list, field);
    }
    orderBy(list: any[], field: string) {
        list.sort((a: any, b: any) => {
            let valueA = this.getFieldValue(a, field);
            let valueB = this.getFieldValue(b, field);
            if (valueA < valueB) {
                return -1;
            } else if (valueA > valueB) {
                return 1;
            } else {
                return 0;
            }
        });
    }
    orderByDescending(list: any[], field: string) {
        list.sort((a: any, b: any) => {
            let valueA = this.getFieldValue(a, field);
            let valueB = this.getFieldValue(b, field);
            if (valueA > valueB) {
                return -1;
            } else if (valueA < valueB) {
                return 1;
            } else {
                return 0;
            }
        });
    }
    toDate(date: string) {
		if (date == null)
			return null;
		return date.substring(0, 10);
	}

    minNumberLenth(num : number, size: number) : string {
        var s = num + "";
        while (s.length < size)
            s = "0" + s;
        return s;
    }
}