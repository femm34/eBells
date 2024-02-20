import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    create(createTransactionDto: CreateTransactionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTransactionDto: UpdateTransactionDto): string;
    remove(id: string): string;
}
