import { PersonForm, PersonRow, PersonService } from '@/ServerTypes/MovieDB';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.panel()
@Decorators.registerClass('MovieTutorial.MovieDB.PersonDialog')
export class PersonDialog extends EntityDialog<PersonRow, any> {
    protected getFormKey() { return PersonForm.formKey; }
    protected getRowDefinition() { return PersonRow; }
    protected getService() { return PersonService.baseUrl; }

    protected form = new PersonForm(this.idPrefix);

    protected afterLoadEntity() {
        super.afterLoadEntity();

        this.form.MoviesGrid.personId = this.entityId;
    }
}