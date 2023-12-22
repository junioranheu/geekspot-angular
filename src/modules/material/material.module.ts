import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDateFormats, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

// #region helpers
const BRAZILIAN_DATE_FORMATS: MatDateFormats = {
    parse: {
        dateInput: { day: 'numeric', month: 'numeric', year: 'numeric' }
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'numeric' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' }
    }
};

class BrazilianDateAdapter extends NativeDateAdapter {
    override parse(value: any): Date | null {
        if (typeof value === 'string' && value.indexOf('/') > -1) {
            const parts = value.split('/');
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10);
            const year = parseInt(parts[2], 10);

            return new Date(year, month - 1, day);
        }

        return super.parse(value);
    }

    override format(date: Date, displayFormat: Object): string {
        if (displayFormat === 'input') {
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear();

            return `${day}/${month}/${year}`;
        }

        return super.format(date, displayFormat);
    }
}

export function CustomPaginator() {
    const customPaginatorIntl = new MatPaginatorIntl();
    customPaginatorIntl.itemsPerPageLabel = 'Itens por página:';

    customPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
        const atual = ((page * pageSize) + pageSize);
        return ((page * pageSize) + 1) + ' - ' + (atual > length ? length : atual) + ' de ' + length;
    }

    return customPaginatorIntl;
}
// #endregion

const modules = [
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule
];

@NgModule({
    imports: [
        ...modules
    ],
    exports: [
        ...modules
    ],
    providers: [
        // paginator;
        { provide: MatPaginatorIntl, useValue: CustomPaginator() },

        // mat-datepicker;
        { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
        { provide: DateAdapter, useClass: BrazilianDateAdapter },
        { provide: MAT_DATE_FORMATS, useValue: BRAZILIAN_DATE_FORMATS }
    ]
})
export class MaterialModule { }